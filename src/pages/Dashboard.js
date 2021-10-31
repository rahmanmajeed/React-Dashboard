import AppCard from "../components/cards/AppCard";

function DashBoard() {
    return (
        <>
          <div className="container mx-auto my-auto bg-indigo-50 mt-5">
            <AppCard bgColor="bg-blue-500" hasTitle Title="Profile">
              <div className="bg-white rounded-sm"> Profile complete 75%</div>  
            </AppCard>
          </div>
        </>
    )
}

export default DashBoard;