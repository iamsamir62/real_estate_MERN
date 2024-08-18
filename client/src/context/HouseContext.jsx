import React, { useState, useEffect, createContext } from "react";

const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [locations, setLocations] = useState("any");
  const [price, setPrice] = useState("any");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const houseData = [
          {
            id: 1,
            name: "Cozy Cottage",
            images: [
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            type: "Flat",
            location: "Anytown, USA",
            address: "123 Main St",
            bedrooms: 3,
            bathrooms: 2,
            surface: "1500 sq ft",
            price: "$350,000",
            owner: "Samir",
            phone: "9867453490",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum dolore sed aut corporis consequuntur? Molestiae aut corrupti officiis natus sint, provident, cumque repellat sunt expedita reprehenderit eligendi fugiat. Minima.",
          },
          {
            id: 2,
            name: "Modern Villa",
            images: [
              "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            type: "Room",
            location: "Othertown, USA",
            address: "456 Elm St",
            bedrooms: 4,
            bathrooms: 3,
            surface: "2500 sq ft",
            price: "$750,000",
            owner: "DOn",
            phone: "9867453490",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum dolore sed aut corporis consequuntur? Molestiae aut corrupti officiis natus sint, provident, cumque repellat sunt expedita reprehenderit eligendi fugiat. Minima.",
          },
          {
            id: 3,
            name: "Modern Villa",
            images: [
              "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            type: "Room",
            location: "Othertown, USA",
            address: "456 Elm St",
            bedrooms: 4,
            bathrooms: 3,
            surface: "2500 sq ft",
            price: "$750,000",
            owner: "DOn",
            phone: "9867453490",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum dolore sed aut corporis consequuntur? Molestiae aut corrupti officiis natus sint, provident, cumque repellat sunt expedita reprehenderit eligendi fugiat. Minima.",
          },
          {
            id: 4,
            name: "Modern Villa",
            images: [
              "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            type: "Room",
            location: "Othertown, USA",
            address: "456 Elm St",
            bedrooms: 4,
            bathrooms: 3,
            surface: "2500 sq ft",
            price: "$750,000",
            owner: "DOn",
            phone: "9867453490",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum dolore sed aut corporis consequuntur? Molestiae aut corrupti officiis natus sint, provident, cumque repellat sunt expedita reprehenderit eligendi fugiat. Minima.",
          },
          {
            id: 5,
            name: "Modern Villa",
            images: [
              "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            type: "Room",
            location: "Othertown, USA",
            address: "456 Elm St",
            bedrooms: 4,
            bathrooms: 3,
            surface: "2500 sq ft",
            price: "$750,000",
            owner: "DOn",
            phone: "9867453490",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum dolore sed aut corporis consequuntur? Molestiae aut corrupti officiis natus sint, provident, cumque repellat sunt expedita reprehenderit eligendi fugiat. Minima.",
          },
        ];

        const userData = [
          {
            id: 1,
            name: "Gunda",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
          {
            id: 2,
            name: "Don",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
          {
            id: 3,
            name: "Hero",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
          {
            id: 6,
            name: "Hero",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
          {
            id: 4,
            name: "Hero",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
          {
            id: 5,
            name: "Hero",
            username: "sam123",
            email: "kcsam1961@gmail.com",
            photo:
              "https://imgs.search.brave.com/gFd79xXRsbcC3satQ_CQnA72NbUH1sj_gf0ATXxZvj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b3ktcG9zaW5nLXdp/dGgtaGlzLWJpa2Ut/b3V0c2lkZS1jaXR5/XzIzLTIxNDg4MTcz/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc",
          },
        ];

        setHouses(houseData);
        setUsers(userData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        locations,
        setLocations,
        price,
        setPrice,
        loading,
        setLoading,
        users,
        setUsers,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContext;
