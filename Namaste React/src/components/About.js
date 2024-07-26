import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name="Devesh Tuteja (function)" />
            <UserClass name="Devesh Tuteja (class)" location="Gurgaon(class)" />
        </div>
    );
};
export default About