import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const ERROR_MESSAGE = 'Сервис временно недоступен. Попробуйте позже.';

export async function POST(request) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('TELEGRAM env variables are not configured.');
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

    const message = `${prefix}\nИмя: ${trimmedName}\nТелефон: ${trimmedPhone}`;

    // MAX
    try{
      const Phone = "79039166251";
      const idInstance = "3100517801";
      const apiTokenInstance =
      "4e23b210658549c881680633b93bb11301a0f304a927433da6";
      const maxResponse = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        chatId: `${Phone}@c.us`,
        message: message,
        }),
      },
      );
    }
    catch {} 

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API error:', errorText);
      return NextResponse.json(
        { success: false, error: ERROR_MESSAGE },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram handler error:', error);
    return NextResponse.json(
      { success: false, error: ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
