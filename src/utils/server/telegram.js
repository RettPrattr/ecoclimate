'use server'

export default async function sendMessage(message) {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TG_BOT_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!res.ok) {
      const err = await res.json()
      console.error('Telegram Error:', err)
      return false
    }

    return true
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error)
    return false
  }
}
