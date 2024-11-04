import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Content from "../../components/Content/Content.jsx";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Content
          header={<h4 className="font-bold m-5">Nov 2024</h4>}
          body={
            <ul>
              <li>Groceries: $150</li>
              <li>Dining Out: $120</li>
              <li>Gasoline: $80</li>
              <li>Entertainment: $90</li>
              <li>Rent: $1200</li>
              <li>Utilities: $150</li>
              <li>Internet: $60</li>
              <li>Phone: $70</li>
              <li>Insurance: $200</li>
              <li>Clothing: $100</li>
              <li>Health & Wellness: $75</li>
              <li>Transportation: $50</li>
              <li>Personal Care: $45</li>
              <li>Subscriptions: $30</li>
              <li>Gifts: $85</li>
              <li>Education: $200</li>
              <li>Travel: $300</li>
              <li>Home Supplies: $40</li>
              <li>Savings: $500</li>
              <li>Emergency Fund: $150</li>
              <li>Pets: $60</li>
              <li>Charity: $70</li>
              <li>Loan Payments: $400</li>
              <li>Credit Card: $150</li>
              <li>Gym Membership: $25</li>
              <li>Streaming Services: $20</li>
              <li>Hobbies: $60</li>
              <li>Work Lunches: $45</li>
              <li>Books: $30</li>
              <li>Cooking Utensils: $30</li>
              <li>Groceries: $150</li>
              <li>Dining Out: $120</li>
              <li>Gasoline: $80</li>
              <li>Entertainment: $90</li>
              <li>Rent: $1200</li>
              <li>Utilities: $150</li>
              <li>Internet: $60</li>
              <li>Phone: $70</li>
              <li>Insurance: $200</li>
              <li>Clothing: $100</li>
              <li>Health & Wellness: $75</li>
              <li>Transportation: $50</li>
              <li>Personal Care: $45</li>
              <li>Subscriptions: $30</li>
              <li>Gifts: $85</li>
              <li>Education: $200</li>
              <li>Travel: $300</li>
              <li>Home Supplies: $40</li>
              <li>Savings: $500</li>
              <li>Emergency Fund: $150</li>
              <li>Pets: $60</li>
              <li>Charity: $70</li>
              <li>Loan Payments: $400</li>
              <li>Credit Card: $150</li>
              <li>Gym Membership: $25</li>
              <li>Streaming Services: $20</li>
              <li>Hobbies: $60</li>
              <li>Work Lunches: $45</li>
              <li>Books: $30</li>
              <li>Cooking Utensils: $30</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Home;
