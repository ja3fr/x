import { AdminRequest } from "./components/AdminRequest";
import { Layout } from "./components/Layout";

export const Admin = () => {
  return (
    <div className=" ">
      <Layout>
        <div className="flex-col flex gap-8 ml-16 " >
        
        <AdminRequest/>
        </div>
      </Layout>
    </div>
  );
};
