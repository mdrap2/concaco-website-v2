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
      quote: "Concaco has made coordinating with specialists so much easier. No more frustration with disconnected calls or endless emails. It's all in one place!",
      author: "Dr. Sarah Thompson",
      role: "Cardiologist",
    },
    {
      quote: "I can now set up case conferences in minutes, and everyone stays on the same page. It's been a huge time saver for my team!",
      author: "Dr. James Nguyen",
      role: "Oncologist",
    },
    {
      quote: "Concaco eliminates confusion and streamlines care planning. I no longer have to chase down records or updates—everything is secure and accessible.",
      author: "Nurse Emily Carter",
      role: "Primary Care",
    },
    {
      quote: "The secure and intuitive platform has reduced the frustration of juggling multiple tools. It's truly frustration-free collaboration for patient care!",
      author: "Dr. Alex Rivera",
      role: "Neurologist",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
            Trusted by Leading Medical Teams
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