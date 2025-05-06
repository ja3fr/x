import { Layout } from "./components/Layout";
import { Request } from "./components/Request";

export const NouvelleDemande = () => {
  return (
    <div className="">
      <Layout>
        <div className="flex-col flex gap-8 ml-32" >
        <Request/>
        </div>
      </Layout>
    </div>
  );
};
