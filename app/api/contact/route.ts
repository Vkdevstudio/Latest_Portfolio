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

// Email template for user submission confirmation
const userConfirmationEmail = (name: string, interest: string) => ({
  subject: 'We received your message - Vinod Kumar',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #000; margin-bottom: 20px;">Hi ${name},</h2>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Thank you for reaching out! I received your message about <strong>${interest}</strong>.
      </p>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        I'll review your submission carefully and get back to you within <strong>24 hours</strong> with specific ideas and next steps.
      </p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          <strong>What happens next:</strong>
        </p>
        <ol style="color: #666; font-size: 14px; margin-top: 10px;">
          <li>I'll read your message carefully</li>
          <li>Assess if we're a great fit</li>
          <li>Respond with concrete ideas and timeline</li>
        </ol>
      </div>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Meanwhile, feel free to check out my <a href="https://vinod-dev.vercel.app/work" style="color: #34d399; text-decoration: none;">work</a> or <a href="https://vinod-dev.vercel.app/about" style="color: #34d399; text-decoration: none;">story</a>.
      </p>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        Best regards,<br/>
        <strong>Vinod Kumar</strong><br/>
        <a href="https://vinod-dev.vercel.app" style="color: #34d399; text-decoration: none;">vinod-dev.vercel.app</a>
      </p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
      
      <p style="font-size: 12px; color: #999; text-align: center;">
        This is an automated response. Your submission has been recorded in our system.
      </p>
    </div>
  `,
});

// Email template for portfolio owner
const ownerNotificationEmail = (
  name: string,
  email: string,
  company: string,
  interest: string,
  message: string
) => ({
  subject: `New Contact: ${interest} from ${name}`,
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #000; margin-bottom: 20px;">New Contact Submission</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #34d399;">${email}</a></p>
        <p style="margin: 0 0 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p style="margin: 0;"><strong>Interest:</strong> ${interest}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #000; margin-bottom: 10px;">Message:</h3>
        <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</p>
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <div style="background-color: #fffbf0; padding: 15px; border-radius: 8px; border-left: 4px solid #34d399;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          <strong>Next steps:</strong> Reply to this email to respond directly to ${name}.
        </p>
      </div>
      
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      </p>
    </div>
  `,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

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
          ip:ip,
          status: 'new',
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