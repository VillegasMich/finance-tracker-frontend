
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="/users">
          <Button>
            All Users
          </Button>
        </Link>
        <Link to="/user/register">
          <Button>
            Sign Up
          </Button></Link>
      </nav>

    </div>
  );
};


export default HomePage;
