import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { error: "버셀(또는 .env)에 RESEND_API_KEY · CONTACT_EMAIL 이 있는지 확인하세요" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 하고 싶은 말을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // new Resend(...)는 파일 맨 위가 아니라 보내기 함수 안에서 생성
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      subject: `[웹사이트 문의] ${name}님의 메시지`,
      text: `보낸 사람: ${name}\n\n하고 싶은 말:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "메일 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
