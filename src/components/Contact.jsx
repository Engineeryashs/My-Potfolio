export function Contact() {
    return (<div name="Contact us" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-2xl md:text-3xl font-bold">Contact me</h1>
        <p>Please fill out this details to contact me</p>
        <div className="flex flex-col justify-center items-center mt-8">
            <form action="https://getform.io/f/axojgjmb" method="POST" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl font-semibold mb-5">Send your message</h1>
                <label className="block text-gray-700">FullName</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="block shadow rounded-lg w-full appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline mb-5" />
                <label htmlFor="email" className="block">Email Address</label>
                <input type="text" name="email" id="email" placeholder="Enter your email address" className="block shadow rounded-lg w-full appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline mb-5" />
                <label htmlFor="message" className="block">Message</label>
                <textarea name="message" id="message" className="block shadow rounded-lg w-full appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline mb-5" placeholder="Enter your query"></textarea>
                <button className="bg-black text-white rounded-xl px-6 py-2">Send</button>
            </form>
        </div>
    </div>)
}