import { Badge } from '@/components/ui/badge'
import React from 'react'

const RiskAnalayis = () => {
    return (
        <section className="p-0  text-gray-200 space-y-6">

            {/* <!-- Top Row --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* <!-- Risk Distribution --> */}
                <div className="bg-background p-4 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <span className="text-red-500 text-lg">🎯</span> Risk Distribution
                    </h2>

                    {/* <!-- Item --> */}
                    <div className="mt-6 space-y-5">

                        {/* <!-- Conservative --> */}
                        <div className='flex items-center justify-between bg-[rgba(256,256,256,0.01)] p-3 border rounded-xl'>
                            <div className="flex justify-between text-sm mb-1 flex-1/2">
                                <span>Conservative (1–2% risk)</span>

                            </div>
                            <div className='flex flex-1/5 items-center justify-between gap-3'>
                                <div className=" h-2 bg-gray-700 rounded-full w-full">
                                    <div className="h-2 bg-green-500 rounded-full w-[70%]"

                                    ></div>

                                </div>
                                <span className="font-semibold">35%</span>
                            </div>

                        </div>

                        {/* <!-- Moderate --> */}

                         <div className='flex items-center justify-between bg-[rgba(256,256,256,0.01)] p-3 border rounded-xl'>
                            <div className="flex justify-between text-sm mb-1 flex-1/2">
                                <span>Moderate (2–5% risk)</span>

                            </div>
                            <div className='flex flex-1/5 items-center justify-between gap-3'>
                                <div className=" h-2 bg-gray-700 rounded-full w-full">
                                    <div className="h-2 bg-yellow-500 rounded-full w-[45%]"

                                    ></div>

                                </div>
                                <span className="font-semibold">45%</span>
                            </div>

                        </div>
                      

                        {/* <!-- Aggressive --> */}
                         <div className='flex items-center justify-between bg-[rgba(256,256,256,0.01)] p-3 border rounded-xl'>
                            <div className="flex justify-between text-sm mb-1 flex-1/2">
                                <span>Aggressive (5%+ risk)</span>

                            </div>
                            <div className='flex flex-1/5 items-center justify-between gap-3'>
                                <div className=" h-2 bg-gray-700 rounded-full w-full">
                                    <div className="h-2 bg-red-500 rounded-full w-[20%]"

                                    ></div>

                                </div>
                                <span className="font-semibold">20%</span>
                            </div>

                        </div>


                    </div>
                </div>


                {/* <!-- Market Volatility Index --> */}
                <div className="bg-background p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <span className="text-blue-400">🌩</span> Market Volatility Index
                    </h2>

                    <div className="mt-6 text-center">
                        <div className="text-5xl font-bold text-white-400 text-center">73.2</div>
                        <Badge variant={'ghost'} className='mt-2'>Elevated</Badge>
                        

                        <div className="mt-6 space-y-2 text-gray-400 text-sm">
                            <div className='flex items-center justify-between'>
                                <span className="text-muted-foreground">30-day avg:</span> <p className='text-white font-semibold'>68.4</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className="text-muted-foreground">90-day avg:</span> <p className='text-white font-semibold'>61.4</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className="text-muted-foreground">Trend:</span> <p className='text-white font-semibold'>📈 Increasing</p>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Asset Correlation Matrix --> */}
        

        </section>

    )
}

export default RiskAnalayis

