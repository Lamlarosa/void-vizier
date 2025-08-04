import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { portfolioData } from '@/data/portfolio';

const Skills = () => {
  // Transform skills data for line chart
  const skillsData = Object.entries(portfolioData.skills).map(([skill, level], index) => ({
    name: skill,
    level: level,
    index: index
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-foreground font-medium">{`${label}`}</p>
          <p className="text-primary">
            {`Skill Level: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's an overview of my technical skills and proficiency levels across different technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Chart */}
          <div className="animate-slide-in-left">
            <Card className="glass hover-glow">
              <CardHeader>
                <CardTitle className="text-center text-foreground">
                  Skill Proficiency Chart
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="hsl(var(--border))" 
                        opacity={0.3}
                      />
                      <XAxis 
                        dataKey="name" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                      />
                      <Line
                        type="monotone"
                        dataKey="level"
                        stroke="hsl(var(--primary))"
                        strokeWidth={3}
                        dot={{ 
                          fill: "hsl(var(--primary))", 
                          strokeWidth: 2, 
                          r: 6,
                          stroke: "hsl(var(--background))"
                        }}
                        activeDot={{ 
                          r: 8, 
                          fill: "hsl(var(--primary))",
                          stroke: "hsl(var(--background))",
                          strokeWidth: 2
                        }}
                      />
                      <CustomTooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills List */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Technical Expertise
            </h3>
            
            <div className="space-y-4">
              {Object.entries(portfolioData.skills).map(([skill, level], index) => (
                <Card 
                  key={skill} 
                  className="glass hover-glow transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-foreground font-semibold text-lg">{skill}</span>
                      <span className="text-primary font-bold">{level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${level}%`,
                          animation: `slide-in-right 1s ease-out ${index * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="glass mt-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Always Learning
                </h4>
                <p className="text-muted-foreground">
                  I'm constantly improving my skills and staying up-to-date with the latest 
                  technologies and best practices in web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;