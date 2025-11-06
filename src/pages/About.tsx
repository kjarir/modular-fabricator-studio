import { Award, Target, Users, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-5xl font-bold text-foreground animate-fade-in">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Leading the industry in precision-engineered instrument fittings
            for over two decades
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Precision Instruments was founded with a singular mission: to manufacture
                the highest quality instrument fittings that set new standards for reliability
                and performance in industrial applications.
              </p>
              <p>
                Our commitment to excellence has made us a trusted partner for process
                industries worldwide. We specialize in double ferrule compression fittings
                that provide leak-proof, torque-free seals for critical instrumentation systems.
              </p>
              <p>
                With state-of-the-art manufacturing facilities and a team of experienced
                engineers, we continue to innovate and expand our product range to meet
                the evolving needs of modern industrial applications.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every product undergoes rigorous testing to ensure it meets our
                exacting standards and industry certifications.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Continuous research and development to create cutting-edge
                solutions for complex industrial challenges.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Dedicated support team providing technical expertise and custom
                solutions tailored to your needs.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Products engineered for long-term performance in the most
                demanding environments and applications.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl">Quality & Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our manufacturing processes and products comply with international
                standards and industry best practices:
              </p>
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 Quality Management System",
                  "ASME B31.3 Process Piping Standards",
                  "ASTM Material Standards Compliance",
                  "API 670 Machinery Protection Systems",
                  "NACE MR0175/ISO 15156 Sour Service Compliance",
                ].map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <Card className="text-center shadow-card">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary">20+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium">Years of Excellence</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary">500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium">Product Variants</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary">50+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium">Countries Served</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
