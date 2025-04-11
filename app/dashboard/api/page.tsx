import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ApiExplorerPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">API Explorer</h2>

      <Tabs defaultValue="rest" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rest">REST API</TabsTrigger>
          <TabsTrigger value="graphql">GraphQL</TabsTrigger>
          <TabsTrigger value="websocket">WebSocket</TabsTrigger>
        </TabsList>

        <TabsContent value="rest" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>REST API Endpoints</CardTitle>
              <CardDescription>Available REST API endpoints with documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* GET /clients */}
              <div className="rounded-lg border">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">GET</Badge>
                    <span className="font-mono font-semibold">/clients</span>
                  </div>
                  <Badge variant="outline">Authenticated</Badge>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">Description</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Retrieve a list of all clients with pagination support
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Parameters</h4>
                      <div className="mt-2 space-y-2">
                        <div className="text-sm">
                          <span className="font-mono font-medium">page</span>
                          <span className="text-muted-foreground"> - Page number (default: 1)</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-mono font-medium">limit</span>
                          <span className="text-muted-foreground"> - Items per page (default: 20)</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-mono font-medium">sort</span>
                          <span className="text-muted-foreground"> - Sort field (default: created_at)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Response</h4>
                      <div className="mt-2 rounded bg-slate-50 p-2">
                        <pre className="text-xs">
                          {`{
  "data": [
    {
      "id": "1",
      "name": "Acme Inc",
      "email": "contact@acme.com",
      "created_at": "2023-04-01T12:00:00Z"
    },
    ...
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 20
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* POST /leads */}
              <div className="rounded-lg border">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">POST</Badge>
                    <span className="font-mono font-semibold">/leads</span>
                  </div>
                  <Badge variant="outline">Authenticated</Badge>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">Description</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Create a new lead in the system with validation</p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Request Body</h4>
                      <div className="mt-2 rounded bg-slate-50 p-2">
                        <pre className="text-xs">
                          {`{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "source": "website",
  "notes": "Interested in enterprise plan"
}`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Response</h4>
                      <div className="mt-2 rounded bg-slate-50 p-2">
                        <pre className="text-xs">
                          {`{
  "data": {
    "id": "42",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Example Corp",
    "source": "website",
    "notes": "Interested in enterprise plan",
    "created_at": "2023-04-11T08:36:15Z"
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graphql" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>GraphQL API</CardTitle>
              <CardDescription>GraphQL schema and operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg border bg-slate-50 flex items-center justify-center">
                <p className="text-muted-foreground">GraphQL explorer will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="websocket" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>WebSocket API</CardTitle>
              <CardDescription>Real-time WebSocket connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg border bg-slate-50 flex items-center justify-center">
                <p className="text-muted-foreground">WebSocket documentation will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
