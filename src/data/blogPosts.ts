import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'New Microloan Program Launches for Rural Entrepreneurs',
    slug: 'new-microloan-program-launches',
    excerpt: 'Our institution is proud to announce a new microloan program specifically designed for rural entrepreneurs.',
    content: `
      <p>Our institution is proud to announce a new microloan program specifically designed for rural entrepreneurs. This initiative aims to bridge the financial gap that many rural business owners face when trying to access capital.</p>
      
      <p>The program offers loans ranging from $500 to $5,000 with flexible repayment terms and competitive interest rates. What makes this program unique is its focus on agricultural enterprises and rural crafts, recognizing the specific challenges these sectors face.</p>
      
      <p>In addition to financial support, loan recipients will have access to business coaching and networking opportunities to help ensure their success. Our team has worked diligently to design a program that addresses not only the financial needs but also the educational and community support aspects necessary for sustainable business growth.</p>
      
      <p>Applications for the first round of funding will open next month. Interested entrepreneurs can attend one of our upcoming information sessions to learn more about eligibility requirements and the application process.</p>
      
      <p>This program represents our ongoing commitment to financial inclusion and economic development in underserved communities. We believe that by empowering rural entrepreneurs, we can help build stronger, more resilient local economies.</p>
    `,
    date: '2025-05-15',
    imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Maria Johnson'
  },
  {
    id: '2',
    title: 'Financial Literacy Workshop Series Reaches 1,000 Participants',
    slug: 'financial-literacy-workshop-milestone',
    excerpt: 'Our financial literacy workshop series has now reached the milestone of educating 1,000 community members.',
    content: `
      <p>We are thrilled to announce that our financial literacy workshop series has now reached the milestone of educating 1,000 community members. This achievement represents a significant step in our mission to promote financial inclusion and empowerment.</p>
      
      <p>The workshop series, which began two years ago, covers essential topics such as budgeting, saving, credit management, and investment basics. Designed to be accessible to people of all educational backgrounds, our workshops use practical examples and interactive exercises to make financial concepts easy to understand and apply.</p>
      
      <p>Feedback from participants has been overwhelmingly positive, with many reporting improved confidence in managing their finances and making financial decisions. Several participants have gone on to start savings accounts, establish emergency funds, or launch small businesses with the knowledge gained from our workshops.</p>
      
      <p>The success of this program highlights the critical need for financial education in our communities. Moving forward, we plan to expand the workshop series to reach even more individuals and families, with new modules on digital banking, retirement planning, and entrepreneurial finance.</p>
      
      <p>We extend our sincere thanks to our dedicated facilitators, community partners, and all the participants who have made this milestone possible. Together, we are building a more financially literate and empowered community.</p>
    `,
    date: '2025-04-22',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'David Chen'
  },
  {
    id: '3',
    title: 'Impact Study Shows Positive Results of Our Microfinance Programs',
    slug: 'impact-study-positive-results',
    excerpt: 'A recent independent study has confirmed the positive impact of our microfinance programs on local communities.',
    content: `
      <p>A recent independent study has confirmed the positive impact of our microfinance programs on local communities. The comprehensive assessment, conducted over the past year, evaluated the economic and social outcomes for program participants compared to similar non-participants.</p>
      
      <p>The study found that our microfinance clients experienced an average income increase of 27% over the two-year period following their first loan. Additionally, 68% of clients reported being able to invest in education for their children, 55% improved their housing conditions, and 73% felt more confident about their financial future.</p>
      
      <p>Beyond the direct economic benefits, the study highlighted several important social impacts. These included increased community engagement, higher rates of female empowerment in households where women were the primary borrowers, and stronger local business networks among program participants.</p>
      
      <p>The research also identified areas for improvement, including the need for more targeted support for specific industry sectors and enhanced financial literacy training. We are already working to implement these recommendations in our program updates.</p>
      
      <p>We are immensely proud of these results, which validate our approach and the hard work of our clients. This study reinforces our commitment to continually refine our programs to maximize positive impact and address the evolving needs of the communities we serve.</p>
    `,
    date: '2025-03-10',
    imageUrl: 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Nguyen'
  },
  {
    id: '4',
    title: 'Partnership with Local Government Expands Access to Financial Services',
    slug: 'partnership-local-government',
    excerpt: 'We\'ve established a new partnership with the local government to bring financial services to underserved areas.',
    content: `
      <p>We are excited to announce a groundbreaking partnership with the local government aimed at expanding access to financial services in underserved areas. This collaboration will enable us to reach communities that have historically had limited access to banking and credit facilities.</p>
      
      <p>The initiative includes the establishment of new service points in five rural districts, mobile banking units that will visit remote villages on a weekly schedule, and a digital banking platform specifically designed for users with limited technological access or experience.</p>
      
      <p>This partnership represents a significant commitment from both our institution and the local government to address financial exclusion. The government is providing infrastructure support and regulatory facilitation, while we bring our financial expertise, products, and services tailored to the needs of these communities.</p>
      
      <p>Community response to the announcement has been enthusiastic, with local leaders expressing optimism about the potential economic benefits. Many residents in the target areas currently rely on informal financial systems or must travel long distances to access banking services.</p>
      
      <p>We believe this model of public-private partnership has the potential to create lasting positive change in financial inclusion. If successful, it could serve as a template for similar initiatives in other regions facing similar challenges.</p>
    `,
    date: '2025-02-18',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Robert Kimani'
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}