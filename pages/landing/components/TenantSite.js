import LandingPageCard from "./LandingPageCard";
import Heading from "./Heading";
import HorizontalLine from "./HorizontalLine";

var i = 0;

const cardContents = [
  {
    aliasName: "Dummy",
    owner: "Vivek Khan",
    rent: "15000/-",
    address: "room no. 108, Lakshmipuram Society",
    cclass: "blue",
    class1: "btn-warning",
    text1: "Details",
    class2: "btn-warning a-margin-left",
    text2: "History",
    class3: "btn-success px-2",
    text3: "Paid",
  },
  {
    aliasName: "Dummy",
    owner: "Vivek Khan",
    rent: "15000/-",
    address: "room no. 108, Lakshmipuram Society",
    cclass: "blue",
    class1: "btn-warning",
    text1: "Details",
    class2: "btn-warning a-margin-left",
    text2: "History",
    class3: "btn-success px-2",
    text3: "Paid",
  },
  {
    aliasName: "Dummy",
    owner: "Vivek Khan",
    rent: "15000/-",
    address: "room no. 108, Lakshmipuram Society",
    cclass: "blue",
    class1: "btn-warning",
    text1: "Details",
    class2: "btn-warning a-margin-left",
    text2: "History",
    class3: "btn-success px-2",
    text3: "Paid",
  },
  {
    aliasName: "Dummy",
    owner: "Vivek Khan",
    rent: "15000/-",
    address: "room no. 108, Lakshmipuram Society",
    cclass: "blue",
    class1: "btn-warning",
    text1: "Details",
    class2: "btn-warning a-margin-left",
    text2: "History",
    class3: "btn-success px-2",
    text3: "Paid",
  },
];

const TenantSite = () => {
  return (
    <>
      <Heading head="Your Sites" />
      <HorizontalLine />

      {cardContents.map((data) => {
        return (
          <div key={i++}>
            <LandingPageCard
              alias={data.aliasName}
              owner={data.owner}
              rent={data.rent}
              address={data.address}
              cclass="a-panel"
              class1="btn-warning"
              text1="Details"
              class2="btn-warning a-margin-left"
              text2="History"
              class3="btn-success px-2"
              text3="Paid"
            />
          </div>
        );
      })}
    </>
  );
};

export default TenantSite;
