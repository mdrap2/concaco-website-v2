import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Concaco has transformed how we coordinate care for complex cases. It's a lifesaver.",
      author: "Dr. Smith",
      role: "Oncologist",
    },
    {
      quote: "I love how easy it is to stay connected with specialists securely.",
      author: "Nurse Emily",
      role: "Primary Care",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
            Trusted by Medical Teams Worldwide
          </h2>
        </div>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="text-center p-8">
                  <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="not-italic">
                    <p className="text-lg font-semibold text-textDark">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </cite>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};