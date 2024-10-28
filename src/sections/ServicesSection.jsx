import MyServiceCard from "../components/MyServiceCard";

export default function ServicesSection() {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
      <MyServiceCard
        title="Fully Custom Webpage"
        description="This service will provide you with a fully custom webpage that we will build from scratch together. This service includes a custom design and development of your webpage. If you would like, we can also provide maintenance, deployment, and domain name procurement services for additional fees depending on your website requirements."
        inclusions={[
          "Fully Custom Design",
          "Website Development",
          "Maintenance (Optional)",
          "Deployment (Optional)",
          "Domain Name Procurement (Optional)",
        ]}
        price={"Starting at $1500 CAD."}
      />
      <MyServiceCard
        title="Webpage in a Day + Deployment"
        description="This service is identical to the 'Webpage in a Day' service, but includes deployment and maintenance of your webpage. Maintenance includes minor updates and bug fixes. This service is perfect for businesses that need a webpage up and running quickly."
        inclusions={[
          "Limited Customized Webpage",
          "Deployment",
          "Maintenance",
          "Domain Name Procurement",
        ]}
        exclusions={["Fully Custom Design",]}
        price={"$150 CAD per month"}
      />
      <MyServiceCard
        title="Webpage in a Day"
        description="This service will provide you with a webpage in a day. Choose from our
          collection of webpage templates and we will customize it to your business and send you the source code."
        inclusions={["Limited Customized Webpage"]}
        exclusions={[
          "Fully Custom Design",
          "Deployment",
          "Maintenance",
          "Domain Name Procurement",
        ]}
        price={"$150 CAD Flat Fee"}
      />
    </section>
  );
}