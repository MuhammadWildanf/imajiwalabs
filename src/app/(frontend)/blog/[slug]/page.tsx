"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import HeroSection from "@/components/frontend/HeroSection";
import CTA from "@/components/frontend/CTA";

// Blog data type
interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  content: {
    sections: {
      title: string;
      content: string;
    }[];
    video?: {
      thumbnail: string;
      url: string;
    };
  };
  tags: string[];
  comments: {
    id: number;
    author: string;
    date: string;
    avatar: string;
    content: string;
  }[];
}

// Sample blog data - in a real app this would come from an API or database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Importance of Cybersecurity",
    image: "/assets/frontend/img/blog/blog2-img2.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "the-importance-of-cybersecurity",
    content: {
      sections: [
        {
          title: "Preventing Cyber Attacks",
          content: "Cyber attacks come in many forms, from phishing scams and malware infections to ransomware attacks and DDoS (Distributed Denial of Service) attacks. These attacks can have devastating consequences for businesses, ranging from financial losses and reputational damage to legal liabilities."
        },
        {
          title: "Ensuring Business Continuity",
          content: "In addition to protecting against external threats, cybersecurity also plays a crucial role in ensuring business continuity. In the event of a cyber attack or data breach, systems may be disrupted, data may be lost or corrupted, and downtime can result in significant financial losses."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Business", "Services", "IT Solution"],
    comments: [
      {
        id: 1,
        author: "Mr. Ana Ritchie",
        date: "8/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image1.png",
        content: "The team at TechXen goes above and beyond to provide exceptional support and service. From the initial consultation to the final deployment, they were there every step of the way, ensuring a seamless integration of our new technology solution."
      },
      {
        id: 2,
        author: "Matthew Kuhnemann",
        date: "8/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image2.png",
        content: "We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable."
      }
    ]
  },
  {
    id: 2,
    title: "The Future of Cloud Computing",
    image: "/assets/frontend/img/blog/blog2-img1.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "the-future-of-cloud-computing",
    content: {
      sections: [
        {
          title: "Cloud Computing Evolution",
          content: "The cloud computing landscape is evolving rapidly, with new technologies and services emerging to meet the growing demands of businesses. From serverless computing to edge computing, the future of cloud technology is shaping up to be more efficient and accessible than ever before."
        },
        {
          title: "Industry Impact",
          content: "The impact of cloud computing on various industries is profound. Businesses are leveraging cloud solutions to enhance their operations, improve scalability, and reduce costs. The ability to access data and applications from anywhere has revolutionized the way we work."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Cloud", "Technology", "Innovation"],
    comments: [
      {
        id: 1,
        author: "Sarah Johnson",
        date: "9/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image1.png",
        content: "This article provides excellent insights into the future of cloud computing. The analysis of emerging trends is particularly valuable for businesses planning their digital transformation."
      }
    ]
  },
  {
    id: 3,
    title: "Embracing Remote Collaboration Tools",
    image: "/assets/frontend/img/blog/blog2-img3.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "embracing-remote-collaboration-tools",
    content: {
      sections: [
        {
          title: "Remote Work Revolution",
          content: "The shift to remote work has transformed how businesses operate. Companies are adopting new tools and technologies to maintain productivity and collaboration in a distributed work environment."
        },
        {
          title: "Collaboration Tools",
          content: "Modern collaboration tools have become essential for remote teams. From video conferencing to project management platforms, these tools help bridge the gap between team members working from different locations."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Remote Work", "Collaboration", "Technology"],
    comments: [
      {
        id: 1,
        author: "David Wilson",
        date: "7/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image2.png",
        content: "Great insights on remote collaboration tools. Our team has been using several of these tools and they've made a significant difference in our productivity."
      }
    ]
  },
  {
    id: 4,
    title: "Stay Up-to-Date With Technology",
    image: "/assets/frontend/img/blog/blog2-img4.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "stay-up-to-date-with-technology",
    content: {
      sections: [
        {
          title: "Technology Trends",
          content: "Staying current with technology trends is crucial for businesses to remain competitive. From AI and machine learning to blockchain and IoT, understanding these technologies can provide significant advantages."
        },
        {
          title: "Continuous Learning",
          content: "The rapid pace of technological change requires a commitment to continuous learning. Businesses must invest in training and development to ensure their teams can effectively leverage new technologies."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Technology", "Innovation", "Learning"],
    comments: [
      {
        id: 1,
        author: "Lisa Chen",
        date: "6/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image1.png",
        content: "This article highlights the importance of staying current with technology. Our company has implemented regular training sessions to keep our team updated."
      }
    ]
  },
  {
    id: 5,
    title: "Discover How Organisations Like Yours..",
    image: "/assets/frontend/img/blog/blog2-img5.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "discover-how-organisations-like-yours",
    content: {
      sections: [
        {
          title: "Industry Insights",
          content: "Understanding how similar organizations are adapting to technological changes can provide valuable insights for your own business strategy."
        },
        {
          title: "Best Practices",
          content: "Learning from the experiences of other organizations can help identify best practices and avoid common pitfalls in digital transformation."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Business", "Strategy", "Digital Transformation"],
    comments: [
      {
        id: 1,
        author: "Michael Brown",
        date: "5/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image2.png",
        content: "The case studies mentioned in this article were very helpful in understanding how other companies are approaching digital transformation."
      }
    ]
  },
  {
    id: 6,
    title: "Protecting Sensitive Data",
    image: "/assets/frontend/img/blog/blog2-img6.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "protecting-sensitive-data",
    content: {
      sections: [
        {
          title: "Data Security",
          content: "Protecting sensitive data is a critical concern for businesses of all sizes. Implementing robust security measures and following best practices can help prevent data breaches and maintain customer trust."
        },
        {
          title: "Compliance Requirements",
          content: "Understanding and complying with data protection regulations is essential. Businesses must stay informed about changing requirements and implement appropriate safeguards."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Security", "Data Protection", "Compliance"],
    comments: [
      {
        id: 1,
        author: "Emma Davis",
        date: "4/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image1.png",
        content: "This article provides a comprehensive overview of data protection strategies. The compliance checklist was particularly useful."
      }
    ]
  },
  {
    id: 7,
    title: "Preventing Cyber Attacks",
    image: "/assets/frontend/img/blog/blog2-img7.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "preventing-cyber-attacks",
    content: {
      sections: [
        {
          title: "Attack Prevention",
          content: "Proactive measures are essential for preventing cyber attacks. Regular security assessments, employee training, and up-to-date security software can significantly reduce vulnerability."
        },
        {
          title: "Incident Response",
          content: "Having a well-defined incident response plan is crucial. Quick and effective response to security incidents can minimize damage and ensure business continuity."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Cybersecurity", "Prevention", "Security"],
    comments: [
      {
        id: 1,
        author: "James Wilson",
        date: "3/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image2.png",
        content: "The practical tips for preventing cyber attacks were very helpful. We've implemented several of these measures in our organization."
      }
    ]
  },
  {
    id: 8,
    title: "Maintaining Regulatory Compliance",
    image: "/assets/frontend/img/blog/blog2-img8.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "maintaining-regulatory-compliance",
    content: {
      sections: [
        {
          title: "Regulatory Landscape",
          content: "The regulatory landscape is constantly evolving. Businesses must stay informed about changes in regulations that affect their operations and implement necessary compliance measures."
        },
        {
          title: "Compliance Strategy",
          content: "Developing a comprehensive compliance strategy is essential. This includes regular audits, documentation, and training to ensure all regulatory requirements are met."
        }
      ],
      video: {
        thumbnail: "/assets/frontend/img/blog/blog-post-video-img.png",
        url: "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
      }
    },
    tags: ["Compliance", "Regulations", "Business"],
    comments: [
      {
        id: 1,
        author: "Sophia Lee",
        date: "2/1/2024",
        avatar: "/assets/frontend/img/blog/comment-box-image1.png",
        content: "This article provides a clear framework for maintaining regulatory compliance. The checklist of key requirements was particularly useful."
      }
    ]
  }
];

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = use(params);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <HeroSection 
        title={post.title} 
        breadcrumb={[
          { label: "Home", href: "/" }, 
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]} 
      />

      <div className="service-details-area-all sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 details-right-space">
              <div className="service-details-post">
                <article>
                  <div className="details-post-area">
                    <div className="image">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="img-fluid"
                      />
                    </div>
                    <div className="social-users">
                      <ul>
                        <li>
                          <Link href="#">
                            <Image
                              src="/assets/frontend/img/icons/user-icon1.png"
                              alt="Author"
                              width={20}
                              height={20}
                            /> {post.author}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/assets/frontend/img/icons/user-icon2.png"
                              alt="Date"
                              width={20}
                              height={20}
                            /> {post.date}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/assets/frontend/img/icons/user-icon3.png"
                              alt="Category"
                              width={20}
                              height={20}
                            /> Cyber Security
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/assets/frontend/img/icons/user-icon4.png"
                              alt="Comments"
                              width={20}
                              height={20}
                            /> 03 Comments
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space30"></div>
                    <div className="heading2">
                      <h2>{post.title}</h2>
                      <div className="space16"></div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </article>

                {post.content.sections.map((section, index) => (
                  <div key={index}>
                    <div className="space50"></div>
                    <article>
                      <div className="details-post-area">
                        <div className="heading2">
                          <h5>{section.title}</h5>
                          <div className="space16"></div>
                          <p>{section.content}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}

                {post.content.video && (
                  <div>
                    <div className="space50"></div>
                    <article>
                      <div className="details-post-area">
                        <div className="video-area-image">
                          <div className="image">
                            <Image
                              src={post.content.video.thumbnail}
                              alt="Video Thumbnail"
                              width={800}
                              height={400}
                            />
                          </div>
                          <div className="video-buttton play-btn">
                            <Link href={post.content.video.url} className="video-play-button">
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )}

                <div className="blog-details-border"></div>

                <div className="tags-links">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="tags">
                        <ul>
                          <li className="text">Tags:</li>
                          {post.tags.map((tag, index) => (
                            <li key={index} className="tag-text">
                              <Link href="#">{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="social">
                        <ul>
                          <li className="text">Social:</li>
                          <li className="icon">
                            <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                          </li>
                          <li className="icon">
                            <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                          </li>
                          <li className="icon">
                            <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-details-border"></div>

                <article>
                  <div className="details-post-area">
                    <div className="heading2">
                      <h5>Blog Comments ({post.comments.length})</h5>
                    </div>

                    <div className="comment-box">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="comment-box">
                          <div className="box-top-area">
                            <div className="heading-area">
                              <div className="image">
                                <Image
                                  src={comment.avatar}
                                  alt={comment.author}
                                  width={60}
                                  height={60}
                                />
                              </div>
                              <div className="heading">
                                <h5><Link href="#">{comment.author}</Link></h5>
                                <Link href="#" className="date">{comment.date}</Link>
                              </div>
                            </div>
                            <div className="reply-btn">
                              <Link href="#">
                                <span><i className="fa-solid fa-reply"></i></span> Reply
                              </Link>
                            </div>
                          </div>
                          <div className="space20"></div>
                          <p className="pera">{comment.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="space50"></div>

                <div className="contact-form-details">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="single-input">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="single-input">
                          <input type="number" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input">
                          <textarea placeholder="Message"></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button className="theme-btn2">
                          Get A Quote <span><i className="fa-solid fa-arrow-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-box-area mb-40">
                <h3>Search by Keyword</h3>
                <div className="search">
                  <input type="text" placeholder="Type keyword here" />
                  <div className="button">
                    <button><i className="fa-regular fa-magnifying-glass"></i></button>
                  </div>
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Our Services</h3>
                <ul className="features-list">
                  <li>
                    <Link href="#">Software Development <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                  <li>
                    <Link href="#">Consulting Service <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                  <li>
                    <Link href="#">Cloud Solution <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                  <li>
                    <Link href="#">Cyber Security <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                  <li>
                    <Link href="#">Data Analytics <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                  <li>
                    <Link href="#">Manage It Services <span><i className="fa-regular fa-angle-right"></i></span></Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Recent Blogs</h3>
                <div className="sidebar-blog-boxs">
                  {blogPosts.slice(0, 4).map((recentPost) => (
                    <div key={recentPost.id} className="sidebar-blogs">
                      <div className="">
                        <div className="image">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="heading">
                        <Link href="#" className="date">
                          <Image
                            src="/assets/frontend/img/icons/date.png"
                            alt="Date"
                            width={16}
                            height={16}
                          /> {recentPost.date}
                        </Link>
                        <h5><Link href={`/blog/${recentPost.slug}`}>{recentPost.title}</Link></h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Tags</h3>
                <ul className="tags">
                  <li><Link href="#">Software Development</Link></li>
                  <li><Link href="#">Cloud</Link></li>
                  <li><Link href="#">It Solution</Link></li>
                  <li><Link href="#">Data Analytics Service</Link></li>
                  <li><Link href="#">Technology</Link></li>
                  <li><Link href="#">Custom Development</Link></li>
                  <li><Link href="#">Cyber Security</Link></li>
                  <li><Link href="#">Consulting Service</Link></li>
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Download Brochure</h3>
                <p>With a focus on excellence & commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                <div className="download-btns">
                  <Link className="daownload1" href="#">PDF Download <Image src="/assets/frontend/img/icons/download-img.png" alt="Download" width={20} height={20} /></Link>
                  <Link className="daownload2" href="#">DOC Download <Image src="/assets/frontend/img/icons/download-img.png" alt="Download" width={20} height={20} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space100"></div>
      <CTA />
    </div>
  );
}