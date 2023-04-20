interface KeywordsProps {
  keywords: string[]
}
export default function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="px-6 pt-4 pb-2">
      {keywords &&
        keywords.map((keyword) => (
          <span
            key={Date.now()}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{keyword}
          </span>
        ))}
    </div>
  )
}
