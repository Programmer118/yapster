
function Skeleton() {
  return (
    <>
      <div className="flex gap-3 h-full pb-2 w-full items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-40"></div>
        </div>
      </div>
      <div className="flex gap-3 w-full items-center pb-2 justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </>
  )
}

export { Skeleton }
