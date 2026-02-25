import { NextResponse } from 'next/server';

const MAX_ACCESS_TOKEN = process.env.MAX_ACCESS_TOKEN;
const MAX_CHAT_ID = process.env.MAX_CHAT_ID;
const MAX_USER_ID = process.env.MAX_USER_ID;

const ERROR_MESSAGE = 'Сервис временно недоступен. Попробуйте позже.';

function getMaxDestination() {
  if (MAX_CHAT_ID) return { type: 'chat_id', value: MAX_CHAT_ID };
  if (MAX_USER_ID) return { type: 'user_id', value: MAX_USER_ID };
  return null;
}

export async function POST(request) {
  const dest = getMaxDestination();
  if (!MAX_ACCESS_TOKEN || !dest) {
    console.error('MAX env variables are not configured (MAX_ACCESS_TOKEN and MAX_CHAT_ID or MAX_USER_ID).');
    return NextResponse.json(
      { success: false, error: ERROR_MESSAGE },
      { status: 500 }
    );
  }

  try {
    const { name, phone, tag } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Не заполнены имя или телефон.' },
        { status: 400 }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedPhone = String(phone).trim();

    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json(
        { success: false, error: 'Не заполнены имя или телефон.' },
        { status: 400 }
      );
    }

    const prefix =
      tag === 'discount-50-december'
        ? '🟢 Новая заявка на скидку -50% в декабре'
        : tag === 'discount-50-spring'
        ? '🌸 Новая заявка по акции Весна -50% для новых клиентов'
        : '🟢 Новая заявка с сайта';

    const text = `${prefix}\nИмя: ${trimmedName}\nТелефон: ${trimmedPhone}`;

    const url = new URL('https://platform-api.max.ru/messages');
    url.searchParams.set(dest.type, dest.value);

    const maxResponse = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        Authorization: MAX_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!maxResponse.ok) {
      const errorText = await maxResponse.text();
      console.error('MAX API error:', maxResponse.status, errorText);
      return NextResponse.json(
        { success: false, error: ERROR_MESSAGE },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('MAX handler error:', error);
    return NextResponse.json(
      { success: false, error: ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
