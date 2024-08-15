import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.46-1.11-1.46-.907-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.831.09-.646.35-1.087.635-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.336 9.56 9.56 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.641.698 1.03 1.592 1.03 2.683 0 3.84-2.337 4.687-4.565 4.935.36.31.679.924.679 1.862 0 1.344-.012 2.428-.012 2.758 0 .269.18.579.688.482C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="12" r="4" /> {/* The large circle on the left */}
      <ellipse cx="12" cy="12" rx="4" ry="6" /> {/* The middle ellipse */}
      <ellipse cx="19" cy="12" rx="1.5" ry="4" />{" "}
      {/* The small ellipse on the right */}
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function WebcamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}

// Your Portfolios component follows here

// Your Portfolios component follows here

// Your Portfolios component follows here

// Your Portfolios component follows here

export function Portfolios() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="#" prefetch={false}>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Aaron Nguyen</span>
              </div>
            </Link>
          </div>
          {/* <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Blogs
            </Link>
          </nav> */}
          <div className="flex items-center gap-4">
            <Link
              href="https://medium.com/@aaronng.dev_71714"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tien-phat-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/tienphatnguyendev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold">Aaron Nguyen</h1>
                <h2 className="text-2xl font-medium text-muted-foreground">
                  Data Scientist
                </h2>
                <p className="mt-4 text-muted-foreground">
                  I am a passionate data science professional with a
                  specialization in the finance domain. With a solid foundation
                  in machine learning, statistics, data analysis, and
                  programming, I excel at leveraging data-driven insights to
                  inform business decisions and develop innovative solutions.
                </p>
              </div>
              <div className="flex items-center justify-end">
                <div className="space-x-4">
                  <Link
                    href="https://twitter.com/aaronng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tien-phat-nguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://github.com/tienphatnguyendev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GithubIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="bg-muted py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xl font-bold">Programming Skills</h3>
                <ul className="space-y-2">
                  <li>
                    Python, PySpark, PHP, C++, Javascript, Typescript, HTML/CSS,
                    SQL, NoSQL, OOP, API Developments, Version Control (Git),
                    Data Structures and Algorithms, Shell Scripting
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Frameworks</h3>
                <ul className="space-y-2">
                  <li>
                    Scikit-Learn, TensorFlow, Pytorch, Optuna, Ray, Lumen, Dash,
                    Svelte, React, XGBoost
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  Data Wrangling and Database Management
                </h3>
                <ul className="space-y-2">
                  <li>
                    Oracle, MySQL, MongoDB, Hadoop, Hive, ETL, Feature
                    Engineering
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  Machine Learning and Statistics
                </h3>
                <ul className="space-y-2">
                  <li>
                    Classification, Regression, Clustering, Tree-Based Models,
                    Boosting Models, Ensemble Models, Deep Learning (CNNs, RNNs,
                    Transformers), Multi-Agent Systems, Hypothesis Testing, A/B
                    Testing, ML Ops
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Cloud Computing</h3>
                <ul className="space-y-2">
                  <li>
                    Microsoft Azure (SQL, Machine Learning, Blob Storage), AWS
                    (S3)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  Large Language Models
                </h3>
                <ul className="space-y-2">
                  <li>Prompt Engineering, RAG</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  Data Analysis & Visualization
                </h3>
                <ul className="space-y-2">
                  <li>
                    EDA, Quantitative Analysis, Time-Series Analysis, Plotly,
                    Power BI, Excel
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="https://capital-vision-dev-8f1401efbadb.herokuapp.com/"
                className="group overflow-hidden rounded-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="project-1.jpg"
                  alt="Capital Vision"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-bold">Capital Vision</h3>
                  <p className="text-muted-foreground">
                    A Financial Analysis Platform that scrapes and analyzes
                    financial data, enhancing user decision-making by providing
                    actionable insights.
                  </p>
                </div>
              </Link>
              <Link
                href="https://github.com/tienphatnguyendev/housing_price_prediction/blob/main/Housing%20Price%20Prediction.ipynb"
                className="group overflow-hidden rounded-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/project-2.jpg"
                  alt="Predict Housing Price"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-bold">Predict Housing Price</h3>
                  <p className="text-muted-foreground">
                    A data science project focused on predicting housing prices
                    using advanced machine learning techniques.
                  </p>
                </div>
              </Link>
              <Link
                href="https://github.com/tienphatnguyendev/bank-churn-classification"
                className="group overflow-hidden rounded-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/project-3.jpg"
                  alt="Bank Churn Classification"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-bold">
                    Bank Churn Classification
                  </h3>
                  <p className="text-muted-foreground">
                    A data science project aimed at predicting bank customer
                    churn through extensive EDA and machine learning models.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="blogs" className="bg-muted py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-3xl font-bold">Blogs</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="https://medium.com/@aaronng.dev_71714/mastering-feature-engineering-normalization-discretization-and-outliers-81b03b8c3ae5"
                className="group overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Feature Engineering Series: Episode 1
                  </h3>
                  <p className="text-muted-foreground">
                    Normalization, Discretization, and Outliers
                  </p>
                </div>
              </Link>
              <Link
                href="https://medium.com/@aaronng.dev_71714/feature-engineering-series-episode-2-mastering-feature-expansion-computable-features-48d16fd2e484"
                className="group overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Feature Engineering Series: Episode 2
                  </h3>
                  <p className="text-muted-foreground">
                    Mastering Feature Expansion: Computable Features,
                    Imputation, and Kernels
                  </p>
                </div>
              </Link>
              <Link
                href="https://medium.com/@aaronng.dev_71714/optimizing-neural-networks-with-hyperparameter-tuning-using-keras-and-scikit-learn-e6cc87c0e0cf"
                className="group overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                prefetch={false}
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    Optimizing Neural Networks
                  </h3>
                  <p className="text-muted-foreground">
                    Hyperparameter Tuning Using Keras and Scikit-Learn
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex justify-between items-center">
          <p className="text-muted-foreground">&copy; 2023 Aaron Nguyen</p>
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <MailIcon className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Aaron Nguyen</DialogTitle>
                  <DialogDescription>
                    Feel free to reach out with any questions or inquiries.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <form>
                    <div className="grid gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <Input id="name" type="text" />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <Input id="email" type="email" />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <Textarea id="message" />
                      </div>
                    </div>
                  </form>
                </div>
                <DialogFooter>
                  <div>
                    <Button>Send Message</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>
    </div>
  );
}
