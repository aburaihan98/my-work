import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuUserRoundCog } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";

function SideBar() {
  return (
    <div>
      dashboard customer
      <div>
        <div>
          <FaRegUser />
          Customers
        </div>
        <div>
          <LuUserRoundCog />
          Subscriptions
        </div>
        <div>
          <LiaFileInvoiceSolid />
          Invoices
        </div>
        <div>
          <LiaFileInvoiceSolid />
          Manage Plans
        </div>
        <div>
          <LiaFileInvoiceSolid />
          Extra Planner
        </div>
        <div>
          <TiDocumentText />
          Tax Setting
        </div>
        <div>
          <TbUsersGroup />
          Admins
        </div>
        <div>
          <AiOutlineUsergroupDelete />
          Admin Groups
        </div>
      </div>
    </div>
  );
}

export default SideBar;
