import MyTemplateCard from "../components/MyTemplateCard";

export default function TemplatesSection() {
  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      <MyTemplateCard
        title="Template 1"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
      />
      <MyTemplateCard
        title="Template 2"
        description="A clean modern webpage for a small business. Features a navbar, footer, social media links and image gallaery of products."
        imgSrc="/template.png"
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
