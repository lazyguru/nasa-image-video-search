export default function HomePage() {
  return (
    <div className="container mb-5 ml-5">
      <div className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
        Welcome to NASA Image & Video Search site
      </div>
      <div className="mt-4 max-w-3xl space-y-6">
        This site will allow you to search the NASA image and video archives
        based on a keyword. To get started, use the navigation bar above and
        choose either "Image Search" or "Video Search"
      </div>
      <div className="mt-4 max-w-3xl space-y-6">
        If you want to see a list of your previous searches during this browsing
        session, please visit the "History" page
      </div>
    </div>
  )
}
