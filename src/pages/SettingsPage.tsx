
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function SettingsPage() {
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully");
  };
  
  return (
    <div className="space-y-8 animate-in slide-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what notifications you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
              <span>Email Notifications</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive emails about your account activity.
              </span>
            </Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="marketing-emails" className="flex flex-col space-y-1">
              <span>Marketing Emails</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </span>
            </Label>
            <Switch id="marketing-emails" />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="security-emails" className="flex flex-col space-y-1">
              <span>Security Emails</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive emails about your account security.
              </span>
            </Label>
            <Switch id="security-emails" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings}>Save changes</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription>
            Update your account preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="language-selection" className="flex flex-col space-y-1">
              <span>Language</span>
              <span className="font-normal text-sm text-muted-foreground">
                Select your preferred language for the dashboard.
              </span>
            </Label>
            <select 
              id="language-selection" 
              className="p-2 rounded bg-secondary text-sm"
              defaultValue="english"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="timezone-selection" className="flex flex-col space-y-1">
              <span>Timezone</span>
              <span className="font-normal text-sm text-muted-foreground">
                Select your preferred timezone.
              </span>
            </Label>
            <select 
              id="timezone-selection" 
              className="p-2 rounded bg-secondary text-sm"
              defaultValue="utc"
            >
              <option value="utc">UTC</option>
              <option value="est">Eastern Standard Time (EST)</option>
              <option value="pst">Pacific Standard Time (PST)</option>
              <option value="cet">Central European Time (CET)</option>
            </select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings}>Save preferences</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
