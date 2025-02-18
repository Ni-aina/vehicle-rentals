
const Dashboard = ()=> {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                key={i}
                className="rounded-md min-h-48 bg-border"
                ></div>
            ))}
        </div>
    )
}

export default Dashboard;