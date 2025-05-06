import { Layout } from "./components/Layout";
import RequestTracker from "./components/RequestTracker";

export const Student = () => {
  return (
    <div className="">
      <Layout>
        <div className="flex-col flex gap-8" >
        
          <RequestTracker />
          <RequestTracker />
        </div>
      </Layout>
    </div>
  );
};
