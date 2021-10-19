import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div className='container'>
      <h1 className='text-primary mt-4'>Our Services</h1>

      <div className='row row-cols-1 row-cols-md-2 g-4 container'>
        {services.map(service => (
          <Service key={service.key} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
