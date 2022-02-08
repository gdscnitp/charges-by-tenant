import Head from 'next/head'
import Heading from "../landing/components/Heading";
import Taskbar from "../profile/components/Taskbar";
import TableList from "../profile/components/TableList";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const pdata = [
  {
    name: "Jan",
    student: 13,
    fees: 10,
  },
  {
    name: "Feb",
    student: 15,
    fees: 12,
  },
  {
    name: "Mar",
    student: 5,
    fees: 10,
  },
  {
    name: "April",
    student: 10,
    fees: 5,
  },
  {
    name: "May",
    student: 9,
    fees: 4,
  },
  {
    name: "June",
    student: 10,
    fees: 8,
  },
  {
    name: "July",
    student: 13,
    fees: 10,
  },
  {
    name: "Aug",
    student: 15,
    fees: 12,
  },
  {
    name: "Sept",
    student: 5,
    fees: 10,
  },
  {
    name: "Oct",
    student: 10,
    fees: 5,
  },
  {
    name: "Nov",
    student: 9,
    fees: 4,
  },
  {
    name: "Dec",
    student: 10,
    fees: 8,
  },
];

const TenantHistory = () => {
  const tableData = [
    // {
    //   date: "01/01/2020",
    //   amount: 10000,
    //   month: "February",
    //   site: "Flat-402",
    // },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
    {
      col1: "01/01/2020",
      col2: 10000,
      col3: "February",
      col4: "Flat-402",
    },
  ];

  return (
    <>
      <Head>
        <title>Transaction History</title>
      </Head>
      <div className="Parent">
        <div className="S_left">
          <Taskbar />
        </div>
        <div className="S_tright">
          <Heading headClass="S_history" head="Your History" />
          <div className="S_cards">
            <div className="S_card S_card1">
              <div className="S_line1">Total Charges Paid</div>
              <div className="S_line2">23,000/-</div>
            </div>
            <div className="S_card S_card2">
              <div className="S_line1">Changes</div>
              <div className="S_line2">
                23,00/- <span>(+10%)</span>
              </div>
            </div>
            <div className="S_card S_card3">
              <div className="S_line1">Total Sites</div>
              <div className="S_line2">3</div>
            </div>
          </div>

          <div className="S_all-chart-container">
            <div className="row S_all-chart-container">
              <div className="col-lg-6 col-md-12 ">
                <div className="S_chart">
                  <div>
                    <ResponsiveContainer width="250%" aspect={1.5}>
                      <BarChart width={500} height={300} data={pdata} margin={{}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <YAxis tickLine={{ stroke: "red" }} /> */}

                        <Tooltip />
                        <Legend />
                        <Bar dataKey="student" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="S_chartDetail S_table-content">
                  <Heading headClass="S_chartHead" head="Site History" />
                  <TableList
                    tableclass="S_ttable"
                    flat="Date"
                    loc="Amount"
                    siteName="Month"
                    available="Site"
                    view="Name"
                    tableData={tableData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default TenantHistory;
