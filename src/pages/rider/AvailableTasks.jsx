import RiderDrawer from './RiderDrawer';

const AvailableTasks = () => {
    return (
        <div className="md:flex border">
            <RiderDrawer></RiderDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Available Task</h3>
                        <div className="text-xl space-y-4">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableTasks;