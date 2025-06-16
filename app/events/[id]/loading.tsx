export default function LoadingEvent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="rounded-lg bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-6 h-10 bg-gray-300 rounded-md w-3/4 mx-auto"></div>

          <div className="mb-8 space-y-3">
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
          </div>

          <div className="mb-8 border-t border-b border-gray-200 py-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-md w-1/2"></div>
              </div>
              <div className="sm:col-span-1">
                <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-md w-1/2"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 h-8 bg-gray-300 rounded-md w-1/3"></div>
            <div className="space-y-4">
              <div className="rounded-md border border-gray-200 bg-gray-100 p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div className="mb-3 sm:mb-0 w-full sm:w-3/4">
                    <div className="h-6 bg-gray-300 rounded-md w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>
                  </div>
                  <div className="h-10 bg-gray-300 rounded-md w-full sm:w-1/4"></div>
                </div>
              </div>
              <div className="rounded-md border border-gray-200 bg-gray-100 p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div className="mb-3 sm:mb-0 w-full sm:w-3/4">
                    <div className="h-6 bg-gray-300 rounded-md w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>
                  </div>
                  <div className="h-10 bg-gray-300 rounded-md w-full sm:w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}