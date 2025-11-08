import { Award, Target, Users, Wrench, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-5xl font-bold text-foreground animate-fade-in">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Delivering reliable, high-performance solutions for fluid control and piping systems
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
                At Flowra Valves, we are dedicated to delivering reliable, high-performance solutions 
                for fluid control and piping systems. With a strong focus on quality, precision, and 
                durability, we specialize in the manufacturing and supply of industrial valves and 
                fittings that meet global standards.
              </p>
              <p>
                Our product range includes Ball Valves, Needle Valves, Check Valves, Pipe Fittings, 
                Double Ferrule Fittings, JIC Fittings, and Autoclave Fittings, designed to perform 
                under the most demanding industrial conditions.
              </p>
              <p>
                We believe that every connection matters — which is why our products are engineered 
                with accuracy, tested for performance, and built to last. Whether for oil & gas, 
                chemical, petrochemical, power, or general industrial applications, Flowra Valves 
                stands for trust, consistency, and excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is simple:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">
                    To provide superior products that ensure leak-proof performance and long service life.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">
                    To build lasting relationships through commitment, transparency, and customer satisfaction.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                With our expertise and dedication, Flowra Valves continues to set benchmarks in the 
                valve and fittings industry — where quality flows, and reliability connects.
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
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every product is engineered with precision and tested for performance 
                to meet global standards and ensure leak-proof operation.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Precision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every connection matters. Our products are engineered with accuracy 
                to perform under the most demanding industrial conditions.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Trust & Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Building lasting relationships through commitment, transparency, 
                and customer satisfaction.
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Durability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Products built to last with long service life, designed for oil & gas, 
                chemical, petrochemical, power, and general industrial applications.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Range */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl">Our Product Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We offer a comprehensive range of industrial valves and fittings designed 
                to meet global standards:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Ball Valves",
                  "Needle Valves",
                  "Check Valves",
                  "Pipe Fittings",
                  "Double Ferrule Fittings",
                  "JIC Fittings",
                  "Autoclave Fittings",
                ].map((product, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
