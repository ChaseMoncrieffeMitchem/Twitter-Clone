import TweetInput from "./Tweetinput";

export default function Postfeed() {
    return (
        <div className="sm:ml-20 xl:ml-96 max-w-2xl flex-grow
         border-gray-700 border-x">
            <div className="px-3 py-2 text-lg sm:text-xl font-bold *:border-b border-gray-700 sticky top-0 z-50">
                Home
            </div>
            <TweetInput />
        </div>
    )
}