import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);



// Initialize Nodemailer transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const userConfirmationEmail = (name: string, interest: string) => ({
  subject: `Got it! Vinod here.`,
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #000; color: #fff;">
      
      <h1 style="font-size: 32px; margin: 0 0 20px 0; font-weight: 900; letter-spacing: -1px;">
        Got it! ✓
      </h1>
      
      <p style="font-size: 18px; color: #a3a3a3; margin: 0 0 30px 0; line-height: 1.6;">
        Hi ${name},
      </p>
      
      <p style="font-size: 16px; color: #d1d5db; line-height: 1.8; margin-bottom: 20px;">
        Your message about <span style="color: #34d399; font-weight: 600;">${interest}</span> landed in my inbox.
      </p>

      <p style="font-size: 16px; color: #d1d5db; line-height: 1.8; margin-bottom: 30px;">
        I'm reading through submissions and will get back to you within <span style="color: #34d399; font-weight: 600;">24 hours</span> with concrete ideas and next steps.
      </p>

      <div style="background: #ffffff08; border-left: 4px solid #34d399; padding: 20px; margin: 40px 0; border-radius: 4px;">
        <p style="margin: 0 0 15px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
          What's Happening
        </p>
        <div style="color: #a3a3a3; font-size: 14px; line-height: 1.8;">
          <p style="margin: 0 0 8px 0;">01 // Read your opportunity in detail</p>
          <p style="margin: 0 0 8px 0;">02 // Assess if we're aligned</p>
          <p style="margin: 0;">03 // Respond with specific ideas</p>
        </div>
      </div>

      <p style="font-size: 14px; color: #888; margin-bottom: 30px;">
        Meanwhile, you can check out my <a href="https://vinod-dev.vercel.app/work" style="color: #34d399; text-decoration: none; font-weight: 600;">work</a> or read <a href="https://vinod-dev.vercel.app/about" style="color: #34d399; text-decoration: none; font-weight: 600;">my story</a>.
      </p>

      <p style="font-size: 14px; color: #888; line-height: 1.8;">
        Talk soon,<br/>
        <span style="color: #fff; font-weight: 700;">Vinod</span><br/>
        <a href="https://vinod-dev.vercel.app" style="color: #34d399; text-decoration: none; font-size: 12px;">vinod-dev.vercel.app</a>
      </p>

      <hr style="border: none; border-top: 1px solid #ffffff08; margin: 40px 0;" />

      <p style="font-size: 12px; color: #666; margin: 0;">
        🔒 Your privacy matters. I don't share data or spam.
      </p>

    </div>
  `,
});

const ownerNotificationEmail = (
  name: string,
  email: string,
  company: string,
  interest: string,
  message: string
) => ({
  subject: `${name} — ${interest}`,
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #000; color: #fff;">
      
      <p style="margin: 0 0 20px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
        New Contact
      </p>

      <h2 style="margin: 0 0 30px 0; font-size: 28px; font-weight: 900; color: #fff; letter-spacing: -1px;">
        ${name}
      </h2>

      <div style="margin-bottom: 30px;">
        <p style="margin: 0 0 12px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
          Context
        </p>
        <div style="font-size: 14px; color: #d1d5db; line-height: 2;">
          <p style="margin: 0;"><span style="color: #888;">Email:</span> <a href="mailto:${email}" style="color: #34d399; text-decoration: none;">${email}</a></p>
          <p style="margin: 0;"><span style="color: #888;">Company:</span> ${company || '—'}</p>
          <p style="margin: 0;"><span style="color: #888;">Interest:</span> <span style="color: #34d399; font-weight: 600;">${interest}</span></p>
        </div>
      </div>

      <div style="background: #ffffff08; padding: 20px; margin: 30px 0; border-radius: 4px; border: 1px solid #ffffff05;">
        <p style="margin: 0 0 15px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
          Message
        </p>
        <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #a3a3a3; line-height: 1.8;">
${message}
        </p>
      </div>

      <div style="background: #34d39910; padding: 15px; border-left: 4px solid #34d399; border-radius: 4px; margin: 30px 0;">
        <p style="margin: 0; font-size: 13px; color: #888;">
          Reply to this email to respond directly to ${name}.
        </p>
      </div>

      <p style="margin: 0; margin-top: 30px; font-size: 12px; color: #666;">
        ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      </p>

    </div>
  `,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';


    const { name, email, company, interest, message } = body;

    console.log('Form submission received:', body);

    // Validate required fields
    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!interest?.trim()) {
      return NextResponse.json(
        { error: 'Interest type is required' },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: 'Message must be at least 20 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const { count } = await supabase
  .from('contacts')
  .select('*', { count: 'exact', head: true })
  .eq('ip_address', ip)
  .gte('created_at', new Date(Date.now() - 24*60*60*1000).toISOString());

if (count && count >= 1) {
  return NextResponse.json(
    { error: 'Only 1 submission per day allowed' },
    { status: 429 }
  );
}

    console.log('All validations passed');

    // Insert into Supabase contacts table
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company?.trim() || null,
          interest: interest.trim(),
          message: message.trim(),
          ip_address:ip,
          status: 'new',
          user_agent: userAgent,
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    console.log('Submission saved:', data);

    // Send confirmation email to user
    try {
      const userEmailTemplate = userConfirmationEmail(name, interest);
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: userEmailTemplate.subject,
        html: userEmailTemplate.html,
      });
      console.log('Confirmation email sent to:', email);
    } catch (emailError) {
      console.error('Error sending confirmation email to user:', emailError);
      // Don't fail the submission if email fails, just log it
    }

    // Send notification email to portfolio owner
    try {
      const ownerEmailTemplate = ownerNotificationEmail(
        name,
        email,
        company || 'N/A',
        interest,
        message
      );
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.OWNER_EMAIL,
        replyTo: email, // Allow replying directly to submitter
        subject: ownerEmailTemplate.subject,
        html: ownerEmailTemplate.html,
      });
      console.log('Notification email sent to owner');
    } catch (emailError) {
      console.error('Error sending notification email to owner:', emailError);
      // Don't fail the submission if email fails, just log it
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will get back to you soon!',
      submissionId: data?.[0]?.id,
    });

  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check submission status
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Submission ID required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}