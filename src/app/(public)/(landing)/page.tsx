import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ArrowRight,
  Mic,
  Brain,
  BarChart,
  MessageSquare,
  Code,
  Zap,
  Menu,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import { CompanyCarousel } from "../../../components/CompanyCarousel"
import Footer from "../../../components/Footer"
import NavBar from "@/components/navbar"
import Pricing from "../../../components/Pricing"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ace Your Tech Interviews With{" "}
                    <span className="text-purple-600 dark:text-purple-400">Verbal Practice</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The first platform that grades not just your code, but how well you explain your thought process.
                    Practice like it's a real interview and get feedback on your communication skills.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/pricing">Start Practicing</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#demo">
                      Watch Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-background bg-gray-200"
                      />
                    ))}
                  </div>
                  <div className="text-muted-foreground">
                  Join thousands of developers — <span className="font-medium">you could be next!</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background p-2 shadow-xl lg:order-last lg:aspect-square">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Interview Practice Platform"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover sm:w-full lg:aspect-square"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/80 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 text-white">
                    <Mic className="h-5 w-5 text-purple-400" />
                    <div className="text-sm">
                      "I would solve this problem using a hash map to store the frequency of each element..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <div className="p-4 m-5">
          <CompanyCarousel />
        </div>
        

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-800/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Practice both code and communication
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform evaluates not just your technical solution, but how well you articulate your thought
                  process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <Mic className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">Verbal Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI evaluates how clearly you explain your approach, thought process, and solution.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <Code className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">Technical Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Practice with a library of 500+ coding problems across all difficulty levels and categories.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <Brain className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">AI-Powered Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get detailed feedback on both your code quality and communication effectiveness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <BarChart className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor your improvement over time with detailed analytics and performance metrics.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">Interview Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Practice in a realistic interview environment with follow-up questions and time constraints.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-800/20">
                <CardHeader>
                  <Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <CardTitle className="mt-4">Personalized Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get recommendations for problems that target your specific weaknesses and growth areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-950">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-800/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Practice like it's a real interview
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform simulates the complete interview experience, from problem-solving to verbal explanation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Select a Challenge",
                  description:
                    "Choose from our library of coding problems across different difficulty levels and categories.",
                },
                {
                  step: "2",
                  title: "Solve & Explain",
                  description:
                    "Solve the problem while verbally explaining your thought process, just like in a real interview.",
                },
                {
                  step: "3",
                  title: "Get Comprehensive Feedback",
                  description:
                    "Receive detailed feedback on both your technical solution and communication effectiveness.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/20 text-purple-500 dark:text-purple-300 text-xl font-bold z-10">
                    {item.step}
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-purple-100 dark:bg-purple-800/30 lg:block"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mx-auto mt-12 max-w-3xl rounded-xl border bg-card p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-800/20 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sample Verbal Assessment</h3>
                    <p className="text-sm text-muted-foreground">Problem: Two Sum</p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-sm">
                  <p className="mb-2 font-medium">User's Verbal Explanation:</p>
                  <p className="text-muted-foreground">
                    "I'll approach this by using a hash map to store each element and its index as I iterate through the
                    array. For each element, I'll check if the complement (target - current element) exists in the hash
                    map. If it does, I've found the pair. This gives us O(n) time complexity instead of the O(n²) from a
                    nested loop approach..."
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 dark:bg-purple-900/10 p-4 text-sm">
                  <p className="mb-2 font-medium">AI Feedback:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-green-600" />
                      <span>Clear explanation of the chosen approach (hash map)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-green-600" />
                      <span>Good analysis of time complexity and comparison to alternative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-amber-600" />
                      <span>Could improve by discussing space complexity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-800/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Success stories from our users
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how GitCracked has helped developers land their dream jobs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "I always struggled with explaining my thought process during interviews. After practicing with GitCracked for a month, I aced my Google interview!",
                  author: "Alex Chen",
                  role: "Software Engineer at Google",
                },
                {
                  quote:
                    "The feedback on my communication skills was eye-opening. I realized I was using too much jargon and not explaining the 'why' behind my approach.",
                  author: "Priya Sharma",
                  role: "Senior Developer at Microsoft",
                },
                {
                  quote:
                    "As a non-native English speaker, I was nervous about technical interviews. GreetCode helped me practice articulating complex concepts clearly.",
                  author: "Miguel Rodriguez",
                  role: "Backend Engineer at Stripe",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="relative overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/20">
                      <span className="text-lg font-bold text-purple-600 dark:text-purple-400">"</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <blockquote className="text-lg">{testimonial.quote}</blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div className="ml-4">
                        <p className="text-sm font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-950">
          <Pricing />
        </section>

        {/* Final CTA Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Want to be informed about GreetCode?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Weekly newsletters containing the latest interview trends
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">Join Newsletter</Button>
                </form>
                <p className="text-xs text-muted-foreground">Join the newsletter. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
