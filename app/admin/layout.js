import Link from "next/link";

export default function AdminLayout({children}) {
    return (
        <div>
            <p className="text-center text-xl text-red-500 font-bold">DEVELOPMENT MODE</p>
            <div className="border p-2 flex items-center justify-around overflow-x-hidden">
                <Link className="btn btn-primary" href="/admin/addUser">Add User</Link>
                <Link className="btn btn-primary" href="/admin/viewUsers">view User</Link>
                <Link className="btn btn-primary" href="/admin/addProduct">Add Product</Link>
                <Link className="btn btn-primary" href="/admin/generateBill">Generate Bill</Link>
                <Link className="btn btn-primary" href="/admin/viewMedia">view Media</Link>
                <Link className="btn btn-primary" href="/admin/orderDiary">order Diary</Link>
            </div>
            {children}
        </div>
    )
}