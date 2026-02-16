function Research({ research }) {
  return (
    <div className="w-full p-6 lg:p-8 bg-amber-100 rounded-2xl shadow font-funnel">
      <h2 className="text-2xl font-bold mb-4 text-center">Research</h2>
      {Array.isArray(research) && research.length > 0 && (
                      <div className="mt-4">
                        
                        <ul className="list-disc list-outside pl-5 space-y-1">
                          {research.map((doc, index) => (
                            <li key={index} className="m-4">
                              <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-red-900 text-xl"
                              >
                                {doc.name || `Research ${index + 1}`}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
    </div>
  );
}

export default Research;
