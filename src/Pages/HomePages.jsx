import ItemCard from '../components/ui/ItemCard.jsx';
import { useState } from "react";

function HomePage() {
    const [test, setTest] = useState(4);

    return (
        <>
            <div style={{ backgroundColor: '#9f9f9f' , padding: '0' }}>

                <div
                    style={{
                        display: 'grid',
                        padding: '0 200px',
                        gridTemplateColumns: `repeat(${test}, 1fr)`,
                        justifyContent: 'center'
                    }}
                >
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                            { name: "Blue", value: "#fdffab" },
                            { name: "Blue", value: "#FFA500" },

                    ]}
                        src='https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D'
                    />
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1617350142147-7403b8fb9889?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww'/>
                    <ItemCard title="Test Title For item" price='150000 MMK'  colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'  colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91c2V8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item" price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVhciUyMHBob25lfGVufDB8fDB8fHww' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D'/>
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1617350142147-7403b8fb9889?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww'/>
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'  colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91c2V8ZW58MHx8MHx8fDA%3D' />
                    <ItemCard title="Test Title For item"  price='150000 MMK'   colors={[
                        { name: "Pink", value: "#e5e1da" },
                        { name: "Green", value: "#aad7d9" },
                        { name: "Blue", value: "#fdffab" },
                        { name: "Blue", value: "#FFA500" },

                    ]} src='https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVhciUyMHBob25lfGVufDB8fDB8fHww' />

                </div>
            </div>
        </>
    );
}

export default HomePage;
