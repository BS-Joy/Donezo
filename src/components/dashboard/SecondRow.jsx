import { FolderKanban, Plus, Video } from "lucide-react";
import CardWrapper from "../ui/CardWrapper";
import AnalysicsCard from "./analysiscard";
import Button from "../ui/Button";

const SecondRow = ({ analytics, products }) => {
  return (
    <>
      <CardWrapper className="col-span-12 md:col-span-12 lg:col-span-6 lg:row-start-4 lg:row-span-3">
        <AnalysicsCard data={analytics} />
      </CardWrapper>

      {/* start meeting card */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-4 lg:row-span-3">
        <h2 className="text-lg font-semibold mb-4">Reminders</h2>
        <h3 className="text-primary text-2xl font-semibold">
          Meeting with Arc Company
        </h3>
        <p className="font-extralight text-primary">
          Time: 02.00 pm - 04.00 pm
        </p>
        <Button className="w-full flex items-center mt-4 gap-3 justify-center py-4">
          <Video />
          Start Meeting
        </Button>
      </CardWrapper>

      {/* Project Card */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-4 lg:row-span-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Products</h2>

          <Button fill={false} className="flex items-center gap-2">
            <Plus size={16} />
            New
          </Button>
        </div>

        <div className="space-y-5 overflow-y-auto">
          {products.map((product, index) => (
            <div key={index} className="flex items-start gap-4">
              <FolderKanban />

              <div className="flex flex-col">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Category: {product.category}
                </p>
                <p className="text-sm text-gray-500">
                  Price: ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">Sales: {product.sales}</p>
              </div>
            </div>
          ))}
        </div>
      </CardWrapper>
    </>
  );
};

export default SecondRow;
