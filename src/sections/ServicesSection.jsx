import MyServiceCard from "../components/MyServiceCard";

export default function ServicesSection() {
  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
      <MyServiceCard
        title="Fully Custom Webpage"
        description="This service will provide you with a fully custom webpage that we will build from scratch. This service includes the custom design and development of your webpage, and if you would like, we can also provide maintenance, and deployment services for additional fees depending on your requirements."
        inclusions={[
          "Fully Custom Design",
          "Website Development",
          "Maintenance (Additional Monthly Cost)",
          "Deployment (Additional Cost)",
          "Domain Name Procurement",
        ]}
        price={"1500"}
      />
      <MyServiceCard
        title="Webpage in a Day + Maintenance"
        description="This service is identical to our 'Webpage in a Day' service, but includes deployment and maintenance of your webpage. Maintenance includes minor updates and bug fixes. This service is perfect for a business that requires a webpage up and running as quickly as possible."
        inclusions={[
          "Limited Customized Webpage",
          "Deployment",
          "Maintenance",
          "Domain Name Procurement",
        ]}
        exclusions={["Fully Custom Design",]}
        price={"150"}
        monthly={true}
      />
      <MyServiceCard
        title="Webpage in a Day"
        description="This service will provide you with a webpage in a day. Choose from our
          collection of webpage templates and we will customize it to your business with provided or stock images and send you the source code (HTML/CSS/JavaScript)."
        inclusions={["Limited Customized Webpage"]}
        exclusions={[
          "Fully Custom Design",
          "Deployment",
          "Maintenance",
          "Domain Name Procurement",
        ]}
        price={"150"}
      />
    </section>
  );
}