import MyTemplateCard from "../components/MyTemplateCard";

export default function TemplatesSection() {
  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 w-screen py-8 md:px-8 lg:px-10 2xl:px-36 justify-items-center">
      <MyTemplateCard
        title="Restaurant Red"
        description="This template is for a restaurant, with an emphasis on dining. Just send us the media you wish to display and we will do the rest."
        imgSrc="/restaurant1.png"
        href="/templates/template1/restaurant1.html"
      />
      <MyTemplateCard
        title="Restaurant Teal"
        description="This is another webpage for a restaurant. With a full screen sized 'hero-section' displaying a beautiful image of your restaurant, and some text to describe your business."
        imgSrc="/restaurant2.png"
        href="/templates/template2/restaurant2.html"
      />
      <MyTemplateCard
        title="Template 3"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
      />
      <MyTemplateCard
        title="Template 4"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
      />
      <MyTemplateCard
        title="Template 5"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
      />
      <MyTemplateCard
        title="Template 6"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
      />
    </section>
  );
}
