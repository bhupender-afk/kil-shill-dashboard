    <div className="bg-background p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold mb-6">Asset Correlation Matrix</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-gray-400">
                                <th className="p-3"></th>
                                <th className="p-3">BTC</th>
                                <th className="p-3">ETH</th>
                                <th className="p-3">SPY</th>
                                <th className="p-3">EUR</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-300 ">

                            {/* <!-- BTC Row --> */}
                            <tr className='gap-2'>
                                <td className="p-3 font-semibold">BTC</td>
                                <td className="p-3 bg-green-900/30 text-green-300">1.00</td>
                                <td className="p-3 bg-green-900/30 text-green-300">0.87</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.23</td>
                                <td className="p-3 bg-red-900/30 text-red-300">-0.12</td>
                            </tr>

                            {/* <!-- ETH Row --> */}
                            <tr>
                                <td className="p-3 font-semibold">ETH</td>
                                <td className="p-3 bg-green-900/30 text-green-300">0.87</td>
                                <td className="p-3 bg-green-900/30 text-green-300">1.00</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.31</td>
                                <td className="p-3 bg-red-900/30 text-red-300">-0.08</td>
                            </tr>

                            {/* <!-- SPY Row --> */}
                            <tr>
                                <td className="p-3 font-semibold">SPY</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.23</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.31</td>
                                <td className="p-3 bg-green-900/30 text-green-300">1.00</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.45</td>
                            </tr>

                            {/* <!-- EUR Row --> */}
                            <tr>
                                <td className="p-3 font-semibold">EUR</td>
                                <td className="p-3 bg-red-900/30 text-red-300">-0.12</td>
                                <td className="p-3 bg-red-900/30 text-red-300">-0.08</td>
                                <td className="p-3 bg-yellow-900/30 text-yellow-300">0.45</td>
                                <td className="p-3 bg-green-900/30 text-green-300">1.00</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>