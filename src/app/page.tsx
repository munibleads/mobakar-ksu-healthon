import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { RegionalChart } from "@/components/dashboard/regional-chart";
import { DownloadIcon, FilterIcon, BellIcon, Map, MessageSquare, Activity, ArrowUpRight, Phone, Mail, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مبكر | Mobakar AI</h2>
          <p className="text-muted-foreground flex items-center gap-2">
            AI Cancer Awareness Dashboard
            <Badge variant="outline" className="bg-green-100 text-green-800 border-none">Demo Only</Badge>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="relative">
            <BellIcon className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </Button>
          <Button variant="outline" className="bg-white">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter Region
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
      <MetricsCards />
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Card className="col-span-1 overflow-hidden bg-gradient-to-b from-white to-slate-50/50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-blue-600" />
                  Regional Distribution
                </CardTitle>
                <CardDescription>
                  Cancer screening participation by region
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-100 text-blue-600 border-none font-medium">
                Interactive
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pb-2">
            <RegionalChart />
          </CardContent>
        </Card>
        
        <Card className="col-span-1 overflow-hidden bg-gradient-to-b from-white to-slate-50/50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                  Communication Campaigns
                </CardTitle>
                <CardDescription>
                  Active and scheduled campaigns
                </CardDescription>
              </div>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Send className="h-3 w-3" />
                Create Campaign
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-2 pt-0">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-emerald-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Breast Cancer Awareness</h4>
                        <p className="text-xs text-slate-500">SMS + WhatsApp Campaign</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Recipients: 125,000</span>
                    <span>Response Rate: 68%</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-blue-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Colon Cancer Prevention</h4>
                        <p className="text-xs text-slate-500">Email + Phone Campaign</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Scheduled</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Recipients: 75,000</span>
                    <span>Starts: Dec 15</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-purple-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Early Detection Drive</h4>
                        <p className="text-xs text-slate-500">Multi-channel Campaign</p>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Draft</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Target: 200,000</span>
                    <span>All Regions</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-teal-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Cervical Cancer Screening</h4>
                        <p className="text-xs text-slate-500">SMS Campaign</p>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800">Ended</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Reached: 95,000</span>
                    <span>Conversion: 72%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
          
        <Card className="col-span-1 overflow-hidden bg-gradient-to-b from-white to-slate-50/50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-purple-600" />
                  Screening Programs
                </CardTitle>
                <CardDescription>
                  Active cancer screening initiatives
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-purple-100 text-purple-600 border-none font-medium">
                3 Programs
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-2 pt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-slate-50 rounded-md p-2 text-center">
                  <p className="text-xs text-slate-500 mb-1">Total Screenings</p>
                  <p className="text-lg font-semibold text-slate-900">1.25M</p>
                  <p className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3" /> 9.3%
                  </p>
                </div>
                <div className="bg-slate-50 rounded-md p-2 text-center">
                  <p className="text-xs text-slate-500 mb-1">Avg. Coverage</p>
                  <p className="text-lg font-semibold text-slate-900">74.2%</p>
                  <p className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3" /> 5.8%
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-pink-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Breast Cancer</h4>
                        <p className="text-xs text-slate-500">Ages 40-74 years</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">85%</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Frequency: Every 2 years</span>
                    <span className="font-medium text-green-600">High Priority</span>
                  </div>
                </div>
                
                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-blue-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Colon Cancer</h4>
                        <p className="text-xs text-slate-500">Ages 45-75 years</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">72%</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Frequency: Every 10 years</span>
                    <span className="font-medium text-blue-600">Active</span>
                  </div>
                </div>
                
                <div className="bg-white border border-slate-100 rounded-lg p-3 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-8 rounded-sm bg-teal-500"></div>
                      <div>
                        <h4 className="font-medium text-sm">Cervical Cancer</h4>
                        <p className="text-xs text-slate-500">Ages 25-65 years</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">78%</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Frequency: Every 3 years</span>
                    <span className="font-medium text-blue-600">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
