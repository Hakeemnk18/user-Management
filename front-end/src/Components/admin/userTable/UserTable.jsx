
import { useState } from "react"
import { Search, Upload, Layers, Settings2, Plus, ChevronDown } from "lucide-react"



export default function UsersTable() {
  const [users] = useState([
    {
      id: 1,
      name: "Scot Carroll",
      organization: "O'Reilly-Treutel",
      email: "carroll_scott@example.net",
      albums: 10,
      photos: 380,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Barbra Nolan",
      organization: "Rogahn and Sons",
      email: "barbra.nolan@example.org",
      albums: 5,
      photos: 173,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Keith Wyman",
      organization: "Zemlak Inc and 1 others",
      email: "keith.wyman@example.com",
      albums: 7,
      photos: 985,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Gustavo Kulas",
      organization: "Rau-White and 1 others",
      email: "kulas.gustavo@example.net",
      albums: 7,
      photos: 351,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Thad Tillman",
      organization: "Bauch Inc",
      email: "tillman.thad@example.com",
      albums: 7,
      photos: 642,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Abel O'Conner",
      organization: "Fraim Group",
      email: "abel.oconner@example.org",
      albums: 4,
      photos: 526,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Wilmer Fadel",
      organization: "Fern, Gusikowski and Keruke and 1 others",
      email: "wilmer.fadel@example.net",
      albums: 8,
      photos: 218,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Mariella Pagac",
      organization: "Christiansen-Kilback",
      email: "pagac_mariella@example.com",
      albums: 10,
      photos: 434,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      name: "Alise Hansen",
      organization: "Upton LLC and 1 others",
      email: "alise_hansen@example.com",
      albums: 6,
      photos: 569,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 10,
      name: "Naoma Wyman",
      organization: "Emser-Cummings and 1 others",
      email: "wyman.naoma@example.com",
      albums: 3,
      photos: 416,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-950 to-gray-900 text-gray-100 p-6 pt-25">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-white">All Users</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Upload className="h-4 w-4 mr-1" />
            <span>Import</span>
          </button>
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Layers className="h-4 w-4 mr-1" />
            <span>Segments</span>
          </button>
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Settings2 className="h-4 w-4 mr-1" />
            <span>Table settings</span>
          </button>
        </div>
      </div>
    
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <button className="flex items-center justify-between w-48 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300">
            <span>All users</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Quick search..."
            className="block w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="flex items-center px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">
          <Plus className="h-4 w-4 mr-1" />
          <span>Add filters</span>
        </button>
      </div>
    
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-6 py-3 border-b border-gray-700 text-gray-400 text-sm">
          <div>Name</div>
          <div>Email</div>
          <div className="text-right">Albums</div>
          <div className="text-right">Photos</div>
        </div>
        <div className="divide-y divide-gray-700">
          {users.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-6 py-4 items-center hover:bg-gray-750"
            >
              <div className="flex items-center">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={`${user.name}'s avatar`}
                  className="w-10 h-10 rounded-full mr-3 bg-gray-700"
                />
                <div>
                  <div className="font-medium text-white">{user.name}</div>
                  <div className="text-sm text-gray-400">{user.organization}</div>
                </div>
              </div>
              <div className="text-gray-300 self-center">{user.email}</div>
              <div className="text-gray-300 text-right">{user.albums}</div>
              <div className="text-gray-300 text-right">{user.photos}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

