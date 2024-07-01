import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductsContainer } from "../../products-list/styles";

const SkeletonCard = ({ cards }: { cards: number }) => {
  return (
    <ProductsContainer>
      {Array(cards)
        .fill(0)
        .map((_item, i) => (
          <div key={i}>
            <div>
              <Skeleton width={256} height={300} />
            </div>
            <div>
              <Skeleton width={256} height={16} />
            </div>
            <div>
              <Skeleton width={256} height={16} />
            </div>
          </div>
        ))}
    </ProductsContainer>
  );
};

export default SkeletonCard;
