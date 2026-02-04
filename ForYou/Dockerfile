# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /app

# Copy everything from the Render root (ForYou)
COPY . .

# Restore using explicit project file
RUN dotnet restore ForYou.csproj

# Publish using explicit project file
RUN dotnet publish ForYou.csproj -c Release -o /app/out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "ForYou.dll"]


