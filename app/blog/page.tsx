import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { formatDistance } from "date-fns";

const posts = [
  {
    title: "Leveraging AI in Property Management",
    description: "How artificial intelligence is transforming the real estate industry",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "AI Strategy",
  },
  {
    title: "Yardi Development Best Practices",
    description: "Essential tips for custom Yardi development and integration",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Yardi Development",
  },
  {
    title: "Advanced Reporting Techniques",
    description: "Maximize insights from your property management data",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Data Reporting",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="max-w-[900px] text-muted-foreground">
            Insights and updates from our team of AI and Yardi development experts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {formatDistance(new Date(post.date), new Date(), { addSuffix: true })}
                  </time>
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}