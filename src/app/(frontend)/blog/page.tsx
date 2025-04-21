"use client";

import Image from "next/image";
import Link from "next/link";
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
    slug: "the-importance-of-cybersecurity"
  },
  {
    id: 2,
    title: "The Future of Cloud Computing",
    image: "/assets/frontend/img/blog/blog2-img1.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "the-future-of-cloud-computing"
  },
  {
    id: 3,
    title: "Embracing Remote Collaboration Tools",
    image: "/assets/frontend/img/blog/blog2-img3.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "embracing-remote-collaboration-tools"
  },
  {
    id: 4,
    title: "Stay Up-to-Date With Technology",
    image: "/assets/frontend/img/blog/blog2-img4.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "stay-up-to-date-with-technology"
  },
  {
    id: 5,
    title: "Discover How Organisations Like Yours..",
    image: "/assets/frontend/img/blog/blog2-img5.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "discover-how-organisations-like-yours"
  },
  {
    id: 6,
    title: "Protecting Sensitive Data",
    image: "/assets/frontend/img/blog/blog2-img6.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "protecting-sensitive-data"
  },
  {
    id: 7,
    title: "Preventing Cyber Attacks",
    image: "/assets/frontend/img/blog/blog2-img7.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We explore the growing trend of remote work and its implications for cybersecurity.",
    slug: "preventing-cyber-attacks"
  },
  {
    id: 8,
    title: "Maintaining Regulatory Compliance",
    image: "/assets/frontend/img/blog/blog2-img8.png",
    date: "10/02/2024",
    author: "Ben Cutting",
    excerpt: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
    slug: "maintaining-regulatory-compliance"
  }
];

export default function Blog() {
  return (
    <div>
      <HeroSection title="Blog" breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <div className="space100"></div>
      <div className="blog">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-6">
                <div className="blog2-box">
                  <div className="image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                  <div className="heading2">
                    <div className="tags">
                      <span className="date">
                        <Image
                          src="/assets/frontend/img/icons/date.png"
                          alt="Date"
                          width={16}
                          height={16}
                        /> {post.date}
                      </span>
                      <span className="date author">
                        <Image
                          src="/assets/frontend/img/icons/user.png"
                          alt="Author"
                          width={16}
                          height={16}
                        /> {post.author}
                      </span>
                    </div>
                    <h4>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <div className="space16"></div>
                    <p>{post.excerpt}</p>
                    <div className="space16"></div>
                    <Link href={`/blog/${post.slug}`} className="learn">
                      Read More <span><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space60"></div>
          <div className="row">
            <div className="col-12 m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li><Link href="#"><i className="fa-solid fa-angle-left"></i></Link></li>
                  <li><Link className="active" href="#">01</Link></li>
                  <li><Link href="#">02</Link></li>
                  <li>...</li>
                  <li><Link href="#">12</Link></li>
                  <li><Link href="#"><i className="fa-solid fa-angle-right"></i></Link></li>
                </ul>
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
