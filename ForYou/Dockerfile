# Build stage (NET 10 PREVIEW)
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /app

# Copy everything from Render root
COPY . .

# Move into actual project folder
WORKDIR /app/ForYou

# Restore & publish explicitly for net10
RUN dotnet restore ForYou.csproj
RUN dotnet publish ForYou.csproj -c Release -o /app/out

# Runtime stage (NET 10)
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "ForYou.dll"]


